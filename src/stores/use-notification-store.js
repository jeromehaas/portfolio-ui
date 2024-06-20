// IMPORTS
import {create} from 'zustand';

// USE-NOTIFICATION-STORE
const useNotificationStore = create((set) => ({
	
	// NOTIFICATIONS
	notifications: [],
	
	// ADD NOTIFICATION
	addNotification: ({message}) => {
		
		// GET TIMESTAMP
		const timestamp = Date.now();
		
		// APPEND MESSAGE
		set((state) => ({notifications: [...state.notifications, {timestamp: timestamp, message: message}]}));
		
		// REMOVE MESSAGE
		setTimeout(() => {
			set((state) => ({notifications: state.notifications.filter((notification) => notification.timestamp !== timestamp)}));
		}, 5000);
		
	},
	
}));

// EXPORTS
export {
	useNotificationStore,
};