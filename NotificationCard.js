export class NotificationCard {
	skeleton() {
		return `
			<figure class="flex items-start gap-2 rounded-md p-2 bg-white skeleton-card">
				<div class="w-8 h-8 rounded-full bg-zinc-300 flex-none animate-pulse"></div>
				<div class="w-full space-y-2">
					<div class="animate-pulse h-5 bg-zinc-300 w-2/6"></div>
					<div class="animation-pulse h-5 bg-zinc-300 w-1/2"></div>
					<div class="animation-pulse h-5 bg-zinc-300 w-1/2"></div>
				</div>
			</figure>
		`;
	}
	render({ number, title, body }) {
		return `
      <figure class="bg-white flex items-start gap-2 rounded-md p-2 hover:bg-emerald-500/10 duration-200 cursor-pointer notification-card">
        <div class="w-8 h-8 rounded-full bg-zinc-300 flex-none flex items-center justify-center">${number}</div>
        <div>
          <h3 class="text-zinc-600 font-medium">${title}</h3>
          <p class="text-sm text-zinc-500">${body}</p>
        </div>
      </figure>
    `;
	}
}
