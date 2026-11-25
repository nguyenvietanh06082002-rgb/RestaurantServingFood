const DRAFT_KEY = "reservationDraft";

export function getReservationDraft() {
  const saved = localStorage.getItem(DRAFT_KEY);

  if (!saved) {
    return { menuItems: [], space: null };
  }

  const draft = JSON.parse(saved);

  if (!Array.isArray(draft.menuItems)) {
    throw new Error("Danh sách món trong đơn đặt bàn không hợp lệ.");
  }

  return {
    menuItems: draft.menuItems,
    space: draft.space ?? null,
  };
}

function saveReservationDraft(draft) {
  localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  return draft;
}

export function addDishToDraft(dish) {
  const draft = getReservationDraft();
  const alreadyAdded = draft.menuItems.some(
    (item) => String(item.id) === String(dish.id),
  );

  const menuItems = alreadyAdded
    ? draft.menuItems.map((item) =>
        String(item.id) === String(dish.id)
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item,
      )
    : [...draft.menuItems, { ...dish, quantity: 1 }];

  return saveReservationDraft({ ...draft, menuItems });
}

export function changeDishQuantity(dishId, difference) {
  const draft = getReservationDraft();
  const menuItems = draft.menuItems.map((item) => {
    if (String(item.id) !== String(dishId)) return item;

    return {
      ...item,
      quantity: Math.max(1, (item.quantity || 1) + difference),
    };
  });

  return saveReservationDraft({ ...draft, menuItems });
}

export function removeDishFromDraft(dishId) {
  const draft = getReservationDraft();
  const menuItems = draft.menuItems.filter(
    (item) => String(item.id) !== String(dishId),
  );

  return saveReservationDraft({ ...draft, menuItems });
}

export function selectSpaceInDraft(space) {
  const draft = getReservationDraft();
  return saveReservationDraft({ ...draft, space });
}

export function removeSpaceFromDraft() {
  const draft = getReservationDraft();
  return saveReservationDraft({ ...draft, space: null });
}