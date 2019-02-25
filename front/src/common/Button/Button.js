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
  textClassName, icon, iconClassName, iconTextSpacing, loadingHideText, loadingSize
}) => (
  <Button
    onClick={onClick}
    classes={{
      root: classes.root,
      label: classes.label
    }}
    style={{
      padding, border,
      borderRadius: borderRadius ? borderRadius : (text === undefined || (loading && loadingHideText) ? '100%' : 5)
    }}
    disabled={disabled}
    children={<Fragment>
      {loading ? (
        <CircularProgress size={loadingSize} />
      ) : <Fragment>
        {icon ? (
          <i
            {...bem({ ignore: true, className: iconClassName }, 'icon', { ignore: true, className: 'material-icons' })}
            children={icon}
          />
        ) : null}
      </Fragment>}
      {icon && text ? (
        <div
          {...bem('space')}
          style={{ width: iconTextSpace }}
        />
      ) : null}
      {loading && loadingHideText ? null : <Fragment>
        {text ? (
          <p
            {...bem('text', { ignore: true, className: textClassName })}
            children={text}
          />
        ) : null}
      </Fragment>}
    </Fragment>}
  />
)

CustomButton.propTypes = propTypes
CustomButton.defaultProps = defaultProps

export default withStyles(styles)(CustomButton)
