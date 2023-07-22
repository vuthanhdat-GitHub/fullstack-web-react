-- Đưa ra tên của các dự án có ngân sách nằm trong khoảng từ 50,000 đến 100,000 
select `tenDA`,`ngansach`
from `Duan`
where `ngansach` > 50000
and `ngansach` < 100000;
-- Đưa ra họ tên của các nhân viên có tham gia làm dự án “Quản lý đào tạo” 
select `Hoten`, `maP`
from `thamgia`
inner join `nhanvien` on `nhanvien`.`MaNV`=`thamgia`.`MaNV`
inner join `Duan` on `duan`.`MaDA` = `thamgia`.`MaDA`
where `tenDA`='Quan ly dao tao';
-- Đưa ra mã số của các nhân viên tham gia cả hai dự án “Quản lý đào taọ” và “Đào tạo từ xa” 
select `thamgia`.`MaNV`, `Hoten`
from `thamgia`
inner join `nhanvien` on `nhanvien`.`MaNV`=`thamgia`.`MaNV`
inner join `Duan` on `duan`.`MaDA` = `thamgia`.`MaDA`
where `tenDA` in('Quan ly dao tao','Dao tao tu xa')
group by `thamgia`.`MaNV`
having count(distinct `tenDA`)=2
;	

-- Đưa ra mã số của các nhân viên tham gia dự án “Quản lý đào tạo” nhưng không tham gia dự án “Đào tạo từ xa” 
select `thamgia`.`MaNV`, `Hoten`,`tenDA`
from `thamgia`
inner join `nhanvien` on `nhanvien`.`MaNV`=`thamgia`.`MaNV`
inner join `Duan` on `duan`.`MaDA` = `thamgia`.`MaDA`
where `tenDA` in('Quan ly dao tao')
group by `thamgia`.`MaNV`
having `tenDA` not in ('Dao tao tu xa')
;	

-- Đưa ra mã số của phòng không có nhân viên nào tham gia dự án 
select `MaP`
from `phong`
where `MaP` not in ( select `MaP` from `thamgia`
inner join `nhanvien` on `nhanvien`.`MaNV`=`thamgia`.`MaNV`
inner join `Duan` on `duan`.`MaDA` = `thamgia`.`MaDA`);

-- Dự án nào có tất cả các nhân viên của phòng ‘NCKH’ tham gia?  
select D.`tenDA`
from `thamgia` as T
inner join `nhanvien` as N on N.`MaNV` = T.`MaNV`
inner join `duan` as D on D.`MaDA` = T.`MaDA`
inner join `phong` as P on P.`MaP` = N.`MaP`
where P.`TenP` = 'NCKH';

-- Ngân sách trung bình của các dự án mà nhân viên có mã số NV001 tham gia là bao nhiêu? 
select avg(`Ngansach`)
from `thamgia` as T
inner join `nhanvien` as N on N.`MaNV` = T.`MaNV`
inner join `duan` as D on D.`MaDA` = T.`MaDA`
inner join `phong` as P on P.`MaP` = N.`MaP`
where N.`MaNV` = 'NV001';

-- Có bao nhiêu nhân viên tham gia dự án Quản lý đào tạo? 
select count(N.`MaNV`)as 'soNhanvienthamgia' ,D.`TenDA`
from `thamgia` as T
inner join `nhanvien` as N on N.`MaNV` = T.`MaNV`
inner join `duan` as D on D.`MaDA` = T.`MaDA`
inner join `phong` as P on P.`MaP` = N.`MaP`
where D.`TenDA` = 'Quan ly dao tao'
group by D.`TenDA`;

-- Hãy đưa ra tên của các dự án mà số nhân viên tham gia dự án đó < 10 
select count(N.`MaNV`) as 'soNhanvienthamgia' ,D.`TenDA`
from `thamgia` as T
inner join `nhanvien` as N on N.`MaNV` = T.`MaNV`
inner join `duan` as D on D.`MaDA` = T.`MaDA`
inner join `phong` as P on P.`MaP` = N.`MaP`
where 'soNhanvienthamgia' < 10
group by D.`TenDA`;

-- Dự án nào có số nhân viên tham gia lớn nhất 
select max(Total), tenduan from 
(
select count(N.`MaNV`) as Total,D.`TenDA` as tenduan
from `thamgia` as T
inner join `nhanvien` as N on N.`MaNV` = T.`MaNV`
inner join `duan` as D on D.`MaDA` = T.`MaDA`
inner join `phong` as P on P.`MaP` = N.`MaP`
group by D.`TenDA`
) as R
;



-- phan support truy xuat du lieu ( k lien quan den bai lam, chi de ho tro)
select * 
from `thamgia` as T
inner join `nhanvien` as N on N.`MaNV` = T.`MaNV`
inner join `duan` as D on D.`MaDA` = T.`MaDA`
inner join `phong` as P on P.`MaP` = N.`MaP`
;