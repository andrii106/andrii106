import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from 'app';
import { CoreProvider } from 'core';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
	<StrictMode>
		<CoreProvider>
			<App />
		</CoreProvider>
	</StrictMode>
);
