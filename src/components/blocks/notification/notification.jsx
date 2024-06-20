'use client';

// IMPORT
import './notification.scss';
import {P} from '@/components/partials/paragraph/paragraph';
import {useNotificationStore} from '@/stores/use-notification-store';

// NOTIFICATION
const Notification = ({className = ''}) => {
	
	// BRING IN NOTIFICATION-STORE
	const {notifications} = useNotificationStore();
	
	// RENDER
	return (
	<div className={`${className} notification`}>
		{notifications.map((notification) => (
		<div className='notification__item item' key={notification.timestamp}>
			<P className={'item__text'}>{notification.message}</P>
		</div>
		))}
	</div>
	);
	
};

// EXPORTS
export default Notification;