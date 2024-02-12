import { BrowserRouter } from 'react-router-dom';
import { combineContextProviders } from './utils';
import { MuiProvider } from './MuiProvider';
import { ReactQueryProvider } from './ReactQueryProvider';
import { ToastProvider } from './toast';

const providers = [MuiProvider, BrowserRouter, ReactQueryProvider, ToastProvider];

export const CoreProvider = combineContextProviders(...providers);
