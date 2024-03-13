import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './SuggestedAccounts.module.scss'
import Tippy from '@tippyjs/react/headless'
import AccountPreview from './AccountPreview/AccountPreview'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import {wrapper as PopperWrapper} from '../../components/Popper'

const cx = classNames.bind(styles)

function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex = "-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview />
                    </div>
                </PopperWrapper>
            </div>
        )
    }

    return (
        <Tippy
            interactive
            delay={[1000, 0]}
            offset={[-20, 0]}
            placement = 'bottom-start'
            render = {renderPreview}
        >
            <div className={cx('account-item')}>
                <img className={cx('avatar')} src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/405820719_3715270112078044_7095396953131507789_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=5f2048&amp;_nc_eui2=AeEX4iX9AUtL2HUhdhvss1U4HLqS4CNPOwwcupLgI087DLer1FPZjadfElE8cvCGfr1MUOXnCaZx9a0BcRh_8upf&amp;_nc_ohc=pvXaYmkWTZYAX_2deHV&amp;_nc_ht=scontent.fdad3-5.fna&amp;oh=00_AfB12zuKA1OmfQuamfnie2occGj9ZHJd37Z0QfJCeuEyYQ&amp;oe=65F312E5" alt="..."/>
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>thanhanvp</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                    </p>
                    <p className={cx('name')}>Nguyễn Thanh An</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {

}


export default AccountItem;