//Ajax
//轮播图上边图片接口调用
let xhr = new XMLHttpRequest();
xhr.open('GET', "https://cloud-music-api-f494k233x-mgod-monkey.vercel.app/banner");
let aaa;
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 304) {
            aaa = xhr.response;
            aaa = JSON.parse(aaa);
            console.log(xhr.response);
            let qings = document.querySelectorAll('.qing');
            let hus = document.querySelectorAll('.hu');
            for (var i = 0; i < 8; i++) {
                qings[i].src = aaa.banners[i].imageUrl;
                hus[i].src = aaa.banners[i].imageUrl;
            }
            qings[8].src = aaa.banners[0].imageUrl;
            hus[8].src = aaa.banners[0].imageUrl;
        }
    }
}
xhr.send();

let biaosheng = new XMLHttpRequest();
let bbb;
biaosheng.open('Get', "https://cloud-music-api-f494k233x-mgod-monkey.vercel.app/playlist/detail?id=19723756");
biaosheng.onreadystatechange = () => {
    if (biaosheng.readyState === 4) {
        if (biaosheng.status === 200 || biaosheng.status === 304) {
            bbb = biaosheng.response;
            bbb = JSON.parse(bbb);
            console.log(biaosheng.response);
            let biaoshengs = document.querySelectorAll('.biaosheng');
            for (var i = 0; i < 10; i++) {
                biaoshengs[i].innerHTML = bbb.playlist.tracks[i].name;
            }
        }
    }
}
biaosheng.send();

let xinge = new XMLHttpRequest();
let ccc;
xinge.open('Get', "https://cloud-music-api-f494k233x-mgod-monkey.vercel.app/playlist/detail?id=3779629");
xinge.onreadystatechange = () => {
    if (xinge.readyState === 4) {
        if (xinge.status === 200 || xinge.status === 304) {
            ccc = xinge.response;
            ccc = JSON.parse(ccc);
            console.log(xinge.response);
            let xinges = document.querySelectorAll('.xinge');
            for (var i = 0; i < 10; i++) {
                xinges[i].innerHTML = ccc.playlist.tracks[i].name;
            }
        }
    }
}
xinge.send();

let yuanchuang = new XMLHttpRequest();
let ddd;
yuanchuang.open('Get', "https://cloud-music-api-f494k233x-mgod-monkey.vercel.app/playlist/detail?id=2884035");
yuanchuang.onreadystatechange = () => {
    if (yuanchuang.readyState === 4) {
        if (yuanchuang.status === 200 || yuanchuang.status === 304) {
            ddd = yuanchuang.response;
            ddd = JSON.parse(ddd);
            console.log(yuanchuang.response);
            let yuanchuangs = document.querySelectorAll('.yuanchuang');
            for (var i = 0; i < 10; i++) {
                yuanchuangs[i].innerHTML = ddd.playlist.tracks[i].name;
            }
        }
    }
}
yuanchuang.send();

//搜索


//热门推荐
let xhrr = new XMLHttpRequest();
let fff;
xhrr.open('GET', "https://cloud-music-api-f494k233x-mgod-monkey.vercel.app/personalized?limit=10");
xhrr.onreadystatechange = () => {
    if (xhrr.readyState === 4) {
        if (xhrr.status === 200 || xhrr.status === 304) {
            fff = xhrr.response;
            fff = JSON.parse(fff);
            console.log(xhrr.response);
            let rmtj = document.querySelectorAll('.erer');
            let jieshaos = document.querySelectorAll('.jieshao');
            let bofangliangs = document.querySelectorAll('.bofangliang');
            for (var i = 0; i < 8; i++) {
                jieshaos[i].innerHTML = fff.result[i].name;
                rmtj[i].src = fff.result[i].picUrl;
                let play = fff.result[i].playCount;
                if (play / 10000 >= 1) {
                    bofangliangs[i].innerHTML = (play - play % 10000) / 10000 + '万';
                } else {
                    bofangliangs[i].innerHTML = fff.result[i].playCount;
                }
            }
        }
    }
}
xhrr.send();
console.log(fff);
