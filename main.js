import { NotificationCard } from "./NotificationCard.js";

class App {
	#baseUrl = "https://jsonplaceholder.typicode.com/posts";
	constructor() {
		this.page = 1;
		this.limit = 5;
		this.notificationList = document.querySelector("#notification-list");

		this.notificationListObserver = new IntersectionObserver(
			this.#handleIntersect.bind(this)
		);
	}
	async #fetchNotifications() {
		this.displaySkeleton();
		try {
			await new Promise(resolve => setTimeout(resolve, 1000));
			const response = await fetch(
				`${this.#baseUrl}?_page=${this.page}&_limit=${this.limit}`
			);
			const data = await response.json();
			this.displayNotification(data);
		} catch (error) {
			console.error("Failed to fetch notifications:", error);
		} finally {
			this.removeSkeleton();
		}
	}
	displaySkeleton() {
		const skeletons = Array.from({ length: this.limit })
			.map(() => new NotificationCard().skeleton())
			.join("");
		this.notificationList.innerHTML += skeletons;
	}
	removeSkeleton() {
		const skeletons = this.notificationList.querySelectorAll(
			"figure.skeleton-card"
		);
		skeletons.forEach(skeleton => skeleton.remove());
	}
	displayNotification(notifications) {
		const notificationCards = notifications
			.map(notification => {
				const notificationCard = new NotificationCard();
				return notificationCard.render({ ...notification });
			})
			.join("");
		this.notificationList.innerHTML += notificationCards;
	}
	getLastNotificationCard() {
		const cards = this.notificationList.querySelectorAll(
			"figure.notification-card"
		);
		return cards[cards.length - 1];
	}
	observeLastCard() {
		const lastCard = this.getLastNotificationCard();
		if (lastCard) {
			this.notificationListObserver.observe(lastCard);
		}
	}
	#handleIntersect(entries) {
		entries.forEach(async entry => {
			if (entry.isIntersecting && !this.isLoading) {
				this.page++;
				await this.#fetchNotifications();
				this.observeLastCard();
			}
		});
	}
	async init() {
		await this.#fetchNotifications();
		this.observeLastCard();
	}
}

const app = new App();
app.init();
