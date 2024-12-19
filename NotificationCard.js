export class NotificationCard {
	skeleton() {
		return `
			<figure class="flex items-start gap-2 rounded-md p-2 bg-white skeleton-card">
				<div class="size-8 rounded-full bg-zinc-300 flex-none animate-pulse"></div>
				<div class="w-full space-y-2">
					<div class="animate-pulse h-5 bg-zinc-300 w-2/6"></div>
					<div class="animation-pulse h-5 bg-zinc-300 w-1/2"></div>
					<div class="animation-pulse h-5 bg-zinc-300 w-1/2"></div>
				</div>
			</figure>
		`;
	}
	render({ title, body }) {
		return `
      <figure class="bg-white flex items-start gap-2 rounded-md p-2 hover:bg-emerald-500/10 duration-200 cursor-pointer notification-card">
				<div class="size-9 rounded-full bg-white shadow flex-none flex items-center justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 text-zinc-500">
						<path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clip-rule="evenodd" />
					</svg>
				</div>
        <div>
					<div class="flex justify-between items-start gap-5">
						<h3 class="text-zinc-600 font-medium">${title}</h3>
						<p class="text-sm text-zinc-400 flex-none">5h ago</p>
					</div>
          <p class="text-sm text-zinc-500 mt-2">${body}</p>
        </div>
      </figure>
    `;
	}
}
