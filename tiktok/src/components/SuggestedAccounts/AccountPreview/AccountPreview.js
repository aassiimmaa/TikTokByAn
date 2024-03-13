import classNames from "classnames/bind";
import styles from './AccountPreview.module.scss'
import Button from '../../Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/405820719_3715270112078044_7095396953131507789_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=5f2048&amp;_nc_eui2=AeEX4iX9AUtL2HUhdhvss1U4HLqS4CNPOwwcupLgI087DLer1FPZjadfElE8cvCGfr1MUOXnCaZx9a0BcRh_8upf&amp;_nc_ohc=pvXaYmkWTZYAX_2deHV&amp;_nc_ht=scontent.fdad3-5.fna&amp;oh=00_AfB12zuKA1OmfQuamfnie2occGj9ZHJd37Z0QfJCeuEyYQ&amp;oe=65F312E5" alt="..." />
                <Button className={cx('follow-btn')} primary small>Follow</Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>thanhanvp</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Thanh An</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers </span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;