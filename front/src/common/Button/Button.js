import React, { Fragment } from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'

import { withStyles } from '@material-ui/core/styles'
import { componentClassNames } from '../../helpers'
import { propTypes, defaultProps } from './props'
import styles from './styles'

import './index.css'

const bem = componentClassNames('Button')

const CustomButton = ({
  classes, onClick, padding, border, loading, borderRadius, disabled, text, iconTextSpace,
  textClassName, icon, iconClassName, iconTextSpacing, loadingHideText, loadingSize, html, style
}) => (
  <Button
    onClick={onClick}
    classes={{
      root: classes.root,
      label: classes.label
    }}
    style={{
      padding, border,
      borderRadius: borderRadius ? borderRadius : (text === undefined || (loading && loadingHideText) ? '100%' : 5),
      ...style
    }}
    disabled={disabled}
    children={<Fragment>
      {html ? html : <Fragment>
        {loading ? (
          <CircularProgress size={loadingSize} />
        ) : <Fragment>
          {icon ? (
            <i
              className={bem(
                { ignore: true, className: iconClassName },
                { ignore: true, className: 'material-icons' }
              )}
              children={icon}
            />
          ) : null}
        </Fragment>}
        {icon && text ? (
          <div
            className={bem('space')}
            style={{ width: iconTextSpace }}
          />
        ) : null}
        {loading && loadingHideText ? null : <Fragment>
          {text ? (
            <p
              className={bem({ ignore: true, className: textClassName }, 'text')}
              children={text}
            />
          ) : null}
        </Fragment>}
      </Fragment>}
    </Fragment>}
  />
)

CustomButton.propTypes = propTypes
CustomButton.defaultProps = defaultProps

export default withStyles(styles)(CustomButton)
