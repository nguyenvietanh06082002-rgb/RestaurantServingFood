import { Fragment, useEffect, useState } from "react";
import { getRegisteredUsers } from "@/features/auth";
import downIcon from "../../assets/images/down.png";
import memberIcon from "../../assets/images/human.png";

const RESERVATIONS_KEY = "reservations";

function getReservations() {
  const reservations = JSON.parse(
    localStorage.getItem(RESERVATIONS_KEY) || "[]"
  );

  if (!Array.isArray(reservations)) {
    throw new Error("Dữ liệu đặt bàn không hợp lệ.");
  }

  return reservations;
}

function InformationSection() {
  const [members, setMembers] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [membersError, setMembersError] = useState("");
  const [reservationsError, setReservationsError] = useState("");
  const [expandedMemberId, setExpandedMemberId] = useState(null);

  useEffect(() => {
    const loadInformation = () => {
      try {
        setMembers(getRegisteredUsers());
        setMembersError("");
      } catch (error) {
        console.error("Không thể tải danh sách thành viên.", error);
        setMembersError("Không thể tải danh sách thành viên đã đăng ký.");
      }

      try {
        setReservations(getReservations());
        setReservationsError("");
      } catch (error) {
        console.error("Không thể tải thông tin đặt bàn.", error);
        setReservationsError("Không thể tải thông tin đặt bàn.");
      }
    };

    loadInformation();
    window.addEventListener("storage", loadInformation);
    return () => window.removeEventListener("storage", loadInformation);
  }, []);

  return (
    <section
      aria-labelledby="registered-members-heading"
      className="mt-8 overflow-hidden rounded-2xl border border-[#EEE6DF] bg-white shadow-[0_8px_30px_rgba(53,39,34,0.06)]"
    >
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[#EEE6DF] px-5 py-5 sm:px-7">
        <div>
          <h3
            id="registered-members-heading"
            className="text-xl font-semibold text-[#352722]"
          >
            Thành viên đã đăng ký
          </h3>
          <p className="mt-1 text-sm text-[#81756D]">
            Danh sách thành viên và thông tin đặt bàn.
          </p>
        </div>
        <p className="rounded-full bg-[#FFF3E7] px-4 py-2 text-sm font-semibold text-[#6A0205]">
          Tổng số: {members.length}
        </p>
      </div>

      {(membersError || reservationsError) && (
        <div className="space-y-1 px-5 pt-4 sm:px-7" role="alert">
          {membersError && <p className="text-sm text-red-700">{membersError}</p>}
          {reservationsError && (
            <p className="text-sm text-red-700">{reservationsError}</p>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[360px] text-left">
          <thead className="bg-[#FCFAF8] text-xs uppercase tracking-wide text-[#81756D]">
            <tr>
              <th className="px-5 py-3 font-semibold sm:px-7" scope="col">
                Thành viên
              </th>
              <th className="px-5 py-3 text-right font-semibold sm:px-7" scope="col">
                Đặt bàn
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EEE6DF]">
            {members.map((member) => {
              const isExpanded = expandedMemberId === member.id;
              const memberReservations = reservations.filter(
                (reservation) =>
                  reservation.memberId != null &&
                  String(reservation.memberId) === String(member.id)
              );
              const detailsId = `member-reservations-${member.id}`;

              return (
                <Fragment key={member.id}>
                  <tr className="group">
                    <td className="px-5 py-4 sm:px-7">
                      <div className="flex items-center gap-3">
                        <img
                          src={memberIcon}
                          alt=""
                          aria-hidden="true"
                          className="h-10 w-10 rounded-full bg-[#FFF3E7] p-2 object-contain"
                        />
                        <div>
                          <p className="font-semibold text-[#352722]">
                            {member.name || member.username}
                          </p>
                          <p className="text-xs text-[#81756D]">
                            {member.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-right sm:px-7">
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={detailsId}
                        aria-label={`${
                          isExpanded ? "Ẩn" : "Xem"
                        } thông tin đặt bàn của ${member.name || member.username}`}
                        onClick={() =>
                          setExpandedMemberId(isExpanded ? null : member.id)
                        }
                        className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-[#6A0205] hover:bg-[#FFF3E7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6A0205]"
                      >
                        <span>{memberReservations.length} đặt bàn</span>
                        <img
                          src={downIcon}
                          alt=""
                          aria-hidden="true"
                          className={`h-4 w-4 object-contain opacity-0 transition duration-200 group-hover:opacity-100 group-focus-within:opacity-100 ${
                            isExpanded ? "rotate-180 opacity-100" : ""
                          }`}
                        />
                      </button>
                    </td>
                  </tr>
                  {isExpanded && (
                    <tr id={detailsId}>
                      <td className="bg-[#FCFAF8] px-5 py-5 sm:px-7" colSpan={2}>
                        {memberReservations.length > 0 ? (
                          <div className="space-y-4">
                            {memberReservations.map((reservation) => (
                              <article
                                key={reservation.id}
                                className="rounded-xl border border-[#EEE6DF] bg-white p-4"
                              >
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                  <h4 className="font-semibold text-[#352722]">
                                    {reservation.spaceName || "Không gian chưa xác định"}
                                  </h4>
                                  <p
                                    className={`text-sm font-semibold ${
                                      reservation.isPaid === true
                                        ? "text-green-700"
                                        : reservation.isPaid === false
                                          ? "text-red-600"
                                          : "text-[#81756D]"
                                    }`}
                                  >
                                    {reservation.isPaid === true
                                      ? "Đã thanh toán"
                                      : reservation.isPaid === false
                                        ? "Chưa thanh toán"
                                        : "Chưa cập nhật"}
                                  </p>
                                </div>
                                {reservation.spaceImage && (
                                  <img
                                    src={reservation.spaceImage}
                                    alt={reservation.spaceName || "Không gian đặt bàn"}
                                    className="mt-3 h-40 w-full rounded-lg object-cover sm:w-64"
                                  />
                                )}
                                <div className="mt-4">
                                  <p className="mb-2 text-sm font-semibold text-[#352722]">
                                    Thực đơn
                                  </p>
                                  {reservation.menuItems?.length ? (
                                    <ul className="grid gap-3 sm:grid-cols-2">
                                      {reservation.menuItems.map((item) => (
                                        <li
                                          key={item.id || item.name}
                                          className="flex items-center gap-3 rounded-lg bg-[#FCFAF8] p-2"
                                        >
                                          {item.image && (
                                            <img
                                              src={item.image}
                                              alt={item.name}
                                              className="h-14 w-14 rounded-md object-cover"
                                            />
                                          )}
                                          <span className="text-sm text-[#514740]">
                                            {item.name}
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <p className="text-sm text-[#81756D]">
                                      Chưa có món trong thực đơn.
                                    </p>
                                  )}
                                </div>
                              </article>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-[#81756D]">
                            Thành viên này chưa có thông tin đặt bàn.
                          </p>
                        )}
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
            {!membersError && members.length === 0 && (
              <tr>
                <td
                  className="px-5 py-10 text-center text-sm text-[#81756D] sm:px-7"
                  colSpan={2}
                >
                  Chưa có thành viên đăng ký.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default InformationSection;
