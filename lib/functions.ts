var theme = "light"

export function toggleTheme(theme) {
  console.log(theme)
  if (theme === "light") {
    theme = "dark"
  } else {
    theme = "light"
  }
  window.location.reload();
}