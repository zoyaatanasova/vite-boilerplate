export default function customHmr() {
	return {
		name: 'custom-hmr',
		enforce: 'post',
		handleHotUpdate({ file, server }) {
			if (file.includes('/public/') || file.includes('/includes/')) {
				server.ws.send({
					type: 'full-reload',
					path: '*'
				});
			}
		}
	};
}
