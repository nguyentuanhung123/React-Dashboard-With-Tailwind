# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Router

B1 : npm i -D react-router-dom
B2 : Tạo thư mục components chứa file Layout.jsx là file tổng
B3 : Sửa trong return :

<div>
<div>sidebar</div>
<div>header</div>
<div>
{<Outlet />}
</div>
</div>
B4 : Vào file App.jsx
B4.1 : import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
B4.2 :
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="product" element={<Product />}/>
           </Route>
        </Routes>
    </Router>
