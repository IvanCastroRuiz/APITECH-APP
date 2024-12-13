import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
// te hacia falta en el import AuthLayout
function App() {
    return (_jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(AuthLayout, {}) }) }) }));
}
export default App;
