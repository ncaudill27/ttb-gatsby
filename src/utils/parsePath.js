export const parsePath = path => {
  path = path.replace(/\//g, '').toUpperCase()
  return path.replace(/-/g, ' ')
}