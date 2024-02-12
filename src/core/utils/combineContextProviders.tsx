import { ComponentProps, FC, PropsWithChildren } from 'react';

const combineContextProviders = (...components: FC<PropsWithChildren>[]): FC<PropsWithChildren> => {
	return components.reduce(
		(AccumulatedComponents, CurrentComponent) => {
			const TempComponent: FC<PropsWithChildren<ComponentProps<FC>>> = ({ children }) => {
				return (
					<AccumulatedComponents>
						<CurrentComponent>{children}</CurrentComponent>
					</AccumulatedComponents>
				);
			};

			return TempComponent;
		},
		({ children }) => <>{children}</>
	);
};

export default combineContextProviders;
