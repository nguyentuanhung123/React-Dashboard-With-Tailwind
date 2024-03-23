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

## Flex

- Khi ta css : flex thì các component con sẽ được dí sát vào nhau , chiều cao của nó phụ thuộc vào nội dung của con dài nhất , các con khác cùng cấp với nó cũng sẽ có độ cao bằng con dài nhất
- khi ta để h-screen thì độ dài của các con cũng sẽ là h-screen
- Nhưng dù ta để w-screen thì độ dài các con cũng không chiếm các phần còn lại đang trống mà chỉ chiểm những phần theo nội dung quy đinh

## Add Google Font

- import ở trên cùng trong trang index.css
- Đặt trong

## Bổ sung

npm i classnames
Example : className={classNames('text-white', linkClasses)}

- Để dùng được css : gap thì phải flex hoặc grid bên cạnh

## Sử dụng HeadlessUI để tạo hiệu ứng trong Header

B1 : Vào https://headlessui.com/
B2 : Chọn 1 trong những cái mà mình muốn
B3 : npm i @headlessui/react
B4 : Giả sử ban đầu ta có:

<div className="flex items-center gap-2 mr-2">
    <HiOutlineChatAlt fontSize={24}/>
    <HiOutlineBell fontSize={24}/>
</div>

-> import {Popover} from '@headlessui/react'
