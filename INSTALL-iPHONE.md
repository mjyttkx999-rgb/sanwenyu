# 拾光工作台 - iPhone 安装说明

## 推荐方式：HTTPS 安装

1. 将压缩包内的全部文件上传到支持 HTTPS 的静态网站服务。
2. 用 iPhone 的 Safari 打开网站地址。
3. 点击 Safari 底部的“分享”按钮。
4. 选择“添加到主屏幕”，名称保留为“拾光工作台”。
5. 点击“添加”，之后从 iPhone 主屏幕启动。

安装后应用会以独立窗口运行，并缓存核心页面，短时断网也可以打开。待办、账目、文件标签和个人记录目前保存在该设备的浏览器存储中。

## 本机预览

在项目目录运行：

```bash
python3 -m http.server 4174 --directory outputs
```

然后在 Mac 浏览器打开 `http://127.0.0.1:4174/`。

## 原生 IPA 说明

可直接安装到真机的原生 `.ipa` 必须使用完整 Xcode、Apple ID/Apple Developer Team 和对应设备签名。本包是无需 App Store 审核即可添加到 iPhone 主屏幕的 PWA 版本，不包含签名 `.ipa`。
