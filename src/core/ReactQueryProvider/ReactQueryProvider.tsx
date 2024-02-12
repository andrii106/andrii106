import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { FC, PropsWithChildren } from 'react';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default ReactQueryProvider;
