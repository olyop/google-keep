import { join } from 'lodash'

export const pipe = x => (...fns) => fns.reduce((v, f) => f(v), x)

export const classNames = (...classNames) => ({
  className: join(
    [ ...classNames ].filter(x => x !== undefined),
    ' '
  )
})

export const componentClassNames = componentName => (...classNames) => {
  const arr = [ ...classNames ]
  const ignore = arr.map(x => x.ignore === true)
  return {
    className: arr[0] === ''  ? (
      componentName
    ) : (
      join(
        arr.filter(x => x !== undefined || x.className === undefined)
          .map((x, i) => ignore[i] ? x.className : `${componentName}__${x}`),
        ' '
      )
    )
  }
}
