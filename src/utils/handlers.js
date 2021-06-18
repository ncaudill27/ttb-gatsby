export const handleEnterKey = func => e => {
  if (e.keyCode === 13) func()
}

export const handleEscKey = func => e => {
  if (e.key !== "Escape") {
    return
  } else {
    func()
  }
}

export const handleTabKey = func => e => {
  if (e.key === "Tab") func()
}
