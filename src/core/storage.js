export default {
    set(key, value) {
        if (Object.prototype.toString.call(value) !== '[object String]') {
            value = JSON.stringify(value);
        }
        sessionStorage.setItem(`preCode_${key}`, value);
    },
    // keep=true时一直保存在缓存中,如一些session/userInfo
    get(key, keep = true) {
        var storageName = 'preCode_' + key;
        var value = sessionStorage[storageName];
        var reg = /(^\{.*\}$)|(^\[.*\]$)/;
        if (reg.test(value)) {
            value = JSON.parse(value);
        }
        if (!keep) {
            sessionStorage.removeItem(storageName);
        }
        return value;
    },
    // 保留`except`,其余清除
    clear(except) {
        if (except) {
            if (except instanceof Array) {
                let tempArr = [];
                for (let item of except) {
                    let obj = {
                        key: item,
                        value: this.get(item)
                    };
                    tempArr.push(obj);
                }
                sessionStorage.clear();
                for (let item of tempArr) {
                    this.set(item.key, item.value);
                }
            } else {
                let exceptVal = this.get(except);
                sessionStorage.clear();
                this.set(except, exceptVal);
            }
        } else {
            sessionStorage.clear();
        }
    },
    remove(key) {
        sessionStorage.removeItem(`preCode_${key}`);
    }
};
