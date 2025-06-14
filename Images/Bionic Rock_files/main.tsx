import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=4cfd31d8"; const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=4cfd31d8"; const ReactDOM = __vite__cjsImport1_reactDom_client.__esModule ? __vite__cjsImport1_reactDom_client.default : __vite__cjsImport1_reactDom_client;
import "/src/index.css?t=1748968669732";
import { RouterProvider, createRouter } from "/node_modules/.vite/deps/@tanstack_react-router.js?v=4cfd31d8";
import { QueryClient, QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=4cfd31d8";
import { AuthProvider } from "/node_modules/.vite/deps/react-oidc-context.js?v=4cfd31d8";
import { routeTree } from "/src/autogen/routeTree.gen.ts?t=1748968669732";
import { oidcConfig } from "/src/utils/keycloak.ts";
import { ReactQueryDevtools } from "/node_modules/.vite/deps/@tanstack_react-query-devtools.js?v=4cfd31d8";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const router = createRouter({
    routeTree,
    context: {
        auth: undefined
    }
});
// Create a Query Client
const queryClient = new QueryClient();
// Render the app with QueryClientProvider
const rootElement = document.getElementById('root');
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(// <StrictMode>
    /*#__PURE__*/ _jsxDEV(AuthProvider, {
        ...oidcConfig,
        children: /*#__PURE__*/ _jsxDEV(QueryClientProvider, {
            client: queryClient,
            children: [
                /*#__PURE__*/ _jsxDEV(ReactQueryDevtools, {
                    initialIsOpen: false
                }, void 0, false, {
                    fileName: "/Users/najiilyass/Library/CloudStorage/OneDrive-TheBostonConsultingGroup,Inc/Documents/azure-bionic-rock/bionic-legal-frontend-repo/src/main.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV(RouterProvider, {
                    router: router
                }, void 0, false, {
                    fileName: "/Users/najiilyass/Library/CloudStorage/OneDrive-TheBostonConsultingGroup,Inc/Documents/azure-bionic-rock/bionic-legal-frontend-repo/src/main.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/Users/najiilyass/Library/CloudStorage/OneDrive-TheBostonConsultingGroup,Inc/Documents/azure-bionic-rock/bionic-legal-frontend-repo/src/main.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/Users/najiilyass/Library/CloudStorage/OneDrive-TheBostonConsultingGroup,Inc/Documents/azure-bionic-rock/bionic-legal-frontend-repo/src/main.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHsgUm91dGVyUHJvdmlkZXIsIGNyZWF0ZVJvdXRlciB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAncmVhY3Qtb2lkYy1jb250ZXh0JztcblxuaW1wb3J0IHsgcm91dGVUcmVlIH0gZnJvbSAnLi9hdXRvZ2VuL3JvdXRlVHJlZS5nZW4nO1xuaW1wb3J0IHsgb2lkY0NvbmZpZyB9IGZyb20gJy4vdXRpbHMva2V5Y2xvYWsnO1xuaW1wb3J0IHsgUmVhY3RRdWVyeURldnRvb2xzIH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5LWRldnRvb2xzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmNvbnN0IHJvdXRlciA9IGNyZWF0ZVJvdXRlcih7IHJvdXRlVHJlZSwgY29udGV4dDogeyBhdXRoOiB1bmRlZmluZWQgYXMgYW55IH0gfSk7XG5cbi8vIFJlZ2lzdGVyIHRoZSByb3V0ZXIgaW5zdGFuY2UgZm9yIHR5cGUgc2FmZXR5XG5kZWNsYXJlIG1vZHVsZSAnQHRhbnN0YWNrL3JlYWN0LXJvdXRlcicge1xuICBpbnRlcmZhY2UgUmVnaXN0ZXIge1xuICAgIHJvdXRlcjogdHlwZW9mIHJvdXRlcjtcbiAgfVxufVxuLy8gQ3JlYXRlIGEgUXVlcnkgQ2xpZW50XG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG4vLyBSZW5kZXIgdGhlIGFwcCB3aXRoIFF1ZXJ5Q2xpZW50UHJvdmlkZXJcbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSE7XG5pZiAoIXJvb3RFbGVtZW50LmlubmVySFRNTCkge1xuICBjb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChyb290RWxlbWVudCk7XG4gIHJvb3QucmVuZGVyKFxuICAgIC8vIDxTdHJpY3RNb2RlPlxuICAgIDxBdXRoUHJvdmlkZXIgey4uLm9pZGNDb25maWd9PlxuICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgIDxSZWFjdFF1ZXJ5RGV2dG9vbHMgaW5pdGlhbElzT3Blbj17ZmFsc2V9IC8+XG4gICAgICAgIDxSb3V0ZXJQcm92aWRlciByb3V0ZXI9e3JvdXRlcn0gLz5cbiAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdERPTSIsIlJvdXRlclByb3ZpZGVyIiwiY3JlYXRlUm91dGVyIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiQXV0aFByb3ZpZGVyIiwicm91dGVUcmVlIiwib2lkY0NvbmZpZyIsIlJlYWN0UXVlcnlEZXZ0b29scyIsInJvdXRlciIsImNvbnRleHQiLCJhdXRoIiwidW5kZWZpbmVkIiwicXVlcnlDbGllbnQiLCJyb290RWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJyb290IiwiY3JlYXRlUm9vdCIsInJlbmRlciIsImNsaWVudCIsImluaXRpYWxJc09wZW4iXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPQSxjQUFjLG1CQUFtQjtBQUN4QyxPQUFPLGNBQWM7QUFDckIsU0FBU0MsY0FBYyxFQUFFQyxZQUFZLFFBQVEseUJBQXlCO0FBQ3RFLFNBQVNDLFdBQVcsRUFBRUMsbUJBQW1CLFFBQVEsd0JBQXdCO0FBQ3pFLFNBQVNDLFlBQVksUUFBUSxxQkFBcUI7QUFFbEQsU0FBU0MsU0FBUyxRQUFRLDBCQUEwQjtBQUNwRCxTQUFTQyxVQUFVLFFBQVEsbUJBQW1CO0FBQzlDLFNBQVNDLGtCQUFrQixRQUFRLGlDQUFpQztBQUVwRSw4REFBOEQ7QUFDOUQsTUFBTUMsU0FBU1AsYUFBYTtJQUFFSTtJQUFXSSxTQUFTO1FBQUVDLE1BQU1DO0lBQWlCO0FBQUU7QUFRN0Usd0JBQXdCO0FBQ3hCLE1BQU1DLGNBQWMsSUFBSVY7QUFFeEIsMENBQTBDO0FBQzFDLE1BQU1XLGNBQWNDLFNBQVNDLGNBQWMsQ0FBQztBQUM1QyxJQUFJLENBQUNGLFlBQVlHLFNBQVMsRUFBRTtJQUMxQixNQUFNQyxPQUFPbEIsU0FBU21CLFVBQVUsQ0FBQ0w7SUFDakNJLEtBQUtFLE1BQU0sQ0FDVCxlQUFlO2tCQUNmLFFBQUNmO1FBQWMsR0FBR0UsVUFBVTtrQkFDMUIsY0FBQSxRQUFDSDtZQUFvQmlCLFFBQVFSOzs4QkFDM0IsUUFBQ0w7b0JBQW1CYyxlQUFlOzs7Ozs7OEJBQ25DLFFBQUNyQjtvQkFBZVEsUUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDIn0=