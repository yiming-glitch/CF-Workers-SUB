
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'auto'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时

//节点链接 + 订阅链接
let MainData = `
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.4.197:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.4.197
vless://80902628-928b-4ade-9ed4-31f60da24888@104.24.144.2:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.24.144.2
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.51.137:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.51.137
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.106.245:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.106.245
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.184.47:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.184.47
vless://80902628-928b-4ade-9ed4-31f60da24888@104.21.226.124:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.21.226.124
vless://80902628-928b-4ade-9ed4-31f60da24888@104.17.56.26:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.17.56.26
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.60.232:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.60.232
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.0.75:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.0.75
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.252.87:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.252.87
vless://80902628-928b-4ade-9ed4-31f60da24888@172.67.194.152:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.67.194.152
vless://80902628-928b-4ade-9ed4-31f60da24888@172.66.40.129:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.66.40.129
vless://80902628-928b-4ade-9ed4-31f60da24888@104.17.5.122:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.17.5.122
vless://80902628-928b-4ade-9ed4-31f60da24888@104.23.122.168:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.23.122.168
vless://80902628-928b-4ade-9ed4-31f60da24888@47.74.5.99:2053?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#JP
vless://80902628-928b-4ade-9ed4-31f60da24888@104.21.74.41:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.21.74.41
vless://80902628-928b-4ade-9ed4-31f60da24888@172.66.41.106:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.66.41.106
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.135.10:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.135.10
vless://80902628-928b-4ade-9ed4-31f60da24888@104.23.136.100:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.23.136.100
vless://80902628-928b-4ade-9ed4-31f60da24888@104.21.26.56:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.21.26.56
vless://80902628-928b-4ade-9ed4-31f60da24888@104.22.48.91:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.22.48.91
vless://80902628-928b-4ade-9ed4-31f60da24888@185.162.231.4:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#185.162.231.4
vless://80902628-928b-4ade-9ed4-31f60da24888@104.21.29.90:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.21.29.90
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.5.252:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.5.252
vless://80902628-928b-4ade-9ed4-31f60da24888@172.64.155.47:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.64.155.47
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.65.55:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.65.55
vless://80902628-928b-4ade-9ed4-31f60da24888@172.67.196.77:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.67.196.77
vless://80902628-928b-4ade-9ed4-31f60da24888@104.20.134.102:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.20.134.102
vless://80902628-928b-4ade-9ed4-31f60da24888@172.66.165.187:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.66.165.187
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.255.213:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.255.213
vless://80902628-928b-4ade-9ed4-31f60da24888@104.21.28.186:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.21.28.186
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.88.229:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.88.229
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.216.162:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.216.162
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.16.180:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.16.180
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.186.67:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.186.67
vless://80902628-928b-4ade-9ed4-31f60da24888@172.67.207.182:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.67.207.182
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.38.199:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.38.199
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.139.231:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.139.231
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.210.87:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.210.87
vless://80902628-928b-4ade-9ed4-31f60da24888@104.19.36.144:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.19.36.144
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.227.141:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.227.141
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.64.7:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.64.7
vless://80902628-928b-4ade-9ed4-31f60da24888@172.67.162.125:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.67.162.125
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.55.171:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.55.171
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.55.153:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.55.153
vless://80902628-928b-4ade-9ed4-31f60da24888@172.64.42.39:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.64.42.39
vless://80902628-928b-4ade-9ed4-31f60da24888@104.20.83.98:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.20.83.98
vless://80902628-928b-4ade-9ed4-31f60da24888@104.26.7.253:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.26.7.253
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.40.67:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.40.67
vless://80902628-928b-4ade-9ed4-31f60da24888@172.67.189.16:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.67.189.16
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.141.103:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.141.103
vless://80902628-928b-4ade-9ed4-31f60da24888@104.20.203.160:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.20.203.160
vless://80902628-928b-4ade-9ed4-31f60da24888@104.20.147.191:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.20.147.191
vless://80902628-928b-4ade-9ed4-31f60da24888@188.114.97.63:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#188.114.97.63
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.18.252:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.18.252
vless://80902628-928b-4ade-9ed4-31f60da24888@104.26.10.231:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.26.10.231
vless://80902628-928b-4ade-9ed4-31f60da24888@172.67.166.142:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.67.166.142
vless://80902628-928b-4ade-9ed4-31f60da24888@104.23.115.138:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.23.115.138
vless://80902628-928b-4ade-9ed4-31f60da24888@104.17.98.226:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.17.98.226
vless://80902628-928b-4ade-9ed4-31f60da24888@104.19.56.220:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.19.56.220
vless://80902628-928b-4ade-9ed4-31f60da24888@172.67.133.6:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.67.133.6
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.7.216:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.7.216
vless://80902628-928b-4ade-9ed4-31f60da24888@104.17.233.17:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.17.233.17
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.40.37:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.40.37
vless://80902628-928b-4ade-9ed4-31f60da24888@198.41.219.240:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#198.41.219.240
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.131.205:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.131.205
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.1.162:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.1.162
vless://80902628-928b-4ade-9ed4-31f60da24888@104.19.144.148:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.19.144.148
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.32.130:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.32.130
vless://80902628-928b-4ade-9ed4-31f60da24888@104.22.56.93:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.22.56.93
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.136.122:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.136.122
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.33.85:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.33.85
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.172.122:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.172.122
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.33.106:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.33.106
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.178.7:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.178.7
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.42.165:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.42.165
vless://80902628-928b-4ade-9ed4-31f60da24888@172.64.229.177:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.64.229.177
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.250.23:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.250.23
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.79.218:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.79.218
vless://80902628-928b-4ade-9ed4-31f60da24888@172.67.169.23:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.67.169.23
vless://80902628-928b-4ade-9ed4-31f60da24888@104.17.123.21:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.17.123.21
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.53.184:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.53.184
vless://80902628-928b-4ade-9ed4-31f60da24888@172.64.143.115:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.64.143.115
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.30.146:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.30.146
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.129.252:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.129.252
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.83.45:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.83.45
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.8.59:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.8.59
vless://80902628-928b-4ade-9ed4-31f60da24888@104.24.22.16:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.24.22.16
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.251.198:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.251.198
vless://80902628-928b-4ade-9ed4-31f60da24888@185.193.28.144:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#185.193.28.144
vless://80902628-928b-4ade-9ed4-31f60da24888@104.25.184.104:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.25.184.104
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.25.162:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.25.162
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.72.169:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.72.169
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.251.118:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.251.118
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.68.247:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.68.247
vless://80902628-928b-4ade-9ed4-31f60da24888@104.24.63.26:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.24.63.26
vless://80902628-928b-4ade-9ed4-31f60da24888@147.185.161.79:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#147.185.161.79
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.52.206:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.52.206
vless://80902628-928b-4ade-9ed4-31f60da24888@198.41.220.25:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#198.41.220.25
vless://80902628-928b-4ade-9ed4-31f60da24888@162.120.94.33:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#162.120.94.33
vless://80902628-928b-4ade-9ed4-31f60da24888@172.67.122.43:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.67.122.43
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.35.89:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.35.89
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.100.187:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.100.187
vless://80902628-928b-4ade-9ed4-31f60da24888@104.23.112.68:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.23.112.68
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.24.155:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.24.155
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.207.196:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.207.196
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.112.42:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.112.42
vless://80902628-928b-4ade-9ed4-31f60da24888@104.19.34.216:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.19.34.216
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.114.152:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.114.152
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.39.126:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.39.126
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.23.187:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.23.187
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.133.227:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.133.227
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.125.169:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.125.169
vless://80902628-928b-4ade-9ed4-31f60da24888@172.66.43.230:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.66.43.230
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.69.79:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.69.79
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.92.182:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.92.182
vless://80902628-928b-4ade-9ed4-31f60da24888@104.19.243.136:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.19.243.136
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.79.211:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.79.211
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.0.7:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.0.7
vless://80902628-928b-4ade-9ed4-31f60da24888@172.67.173.197:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.67.173.197
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.40.180:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.40.180
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.167.224:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.167.224
vless://80902628-928b-4ade-9ed4-31f60da24888@104.19.37.208:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.19.37.208
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.245.191:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.245.191
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.22.221:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.22.221
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.182.84:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.182.84
vless://80902628-928b-4ade-9ed4-31f60da24888@104.19.33.135:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.19.33.135
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.39.229:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.39.229
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.69.74:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.69.74
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.78.43:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.78.43
vless://80902628-928b-4ade-9ed4-31f60da24888@172.67.200.108:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.67.200.108
vless://80902628-928b-4ade-9ed4-31f60da24888@104.20.93.126:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.20.93.126
vless://80902628-928b-4ade-9ed4-31f60da24888@104.19.225.142:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.19.225.142
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.46.219:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.46.219
vless://80902628-928b-4ade-9ed4-31f60da24888@162.159.160.48:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#162.159.160.48
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.19.83:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.19.83
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.195.224:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.195.224
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.163.193:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.163.193
vless://80902628-928b-4ade-9ed4-31f60da24888@104.19.244.227:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.19.244.227
vless://80902628-928b-4ade-9ed4-31f60da24888@172.66.206.250:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.66.206.250
vless://80902628-928b-4ade-9ed4-31f60da24888@104.25.31.37:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.25.31.37
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.12.201:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.12.201
vless://80902628-928b-4ade-9ed4-31f60da24888@104.17.219.122:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.17.219.122
vless://80902628-928b-4ade-9ed4-31f60da24888@172.66.206.111:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.66.206.111
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.90.2:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.90.2
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.242.175:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.242.175
vless://80902628-928b-4ade-9ed4-31f60da24888@172.67.115.47:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.67.115.47
vless://80902628-928b-4ade-9ed4-31f60da24888@104.17.171.80:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.17.171.80
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.33.36:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.33.36
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.46.157:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.46.157
vless://80902628-928b-4ade-9ed4-31f60da24888@104.17.21.49:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.17.21.49
vless://80902628-928b-4ade-9ed4-31f60da24888@172.66.159.238:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.66.159.238
vless://80902628-928b-4ade-9ed4-31f60da24888@172.66.150.181:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.66.150.181
vless://80902628-928b-4ade-9ed4-31f60da24888@104.27.104.154:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.27.104.154
vless://80902628-928b-4ade-9ed4-31f60da24888@104.19.57.47:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.19.57.47
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.47.163:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.47.163
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.187.196:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.187.196
vless://80902628-928b-4ade-9ed4-31f60da24888@104.17.236.135:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.17.236.135
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.180.214:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.180.214
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.144.133:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.144.133
vless://80902628-928b-4ade-9ed4-31f60da24888@172.64.159.130:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.64.159.130
vless://80902628-928b-4ade-9ed4-31f60da24888@104.19.44.217:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.19.44.217
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.28.202:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.28.202
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.148.16:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.148.16
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.78.113:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.78.113
vless://80902628-928b-4ade-9ed4-31f60da24888@162.159.152.193:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#162.159.152.193
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.45.239:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.45.239
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.5.209:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.5.209
vless://80902628-928b-4ade-9ed4-31f60da24888@172.67.69.93:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.67.69.93
vless://80902628-928b-4ade-9ed4-31f60da24888@193.9.49.215:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#193.9.49.215
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.74.55:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.74.55
vless://80902628-928b-4ade-9ed4-31f60da24888@172.67.161.116:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.67.161.116
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.48.110:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.48.110
vless://80902628-928b-4ade-9ed4-31f60da24888@198.41.221.23:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#198.41.221.23
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.21.110:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.21.110
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.210.104:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.210.104
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.71.43:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.71.43
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.92.114:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.92.114
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.69.63:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.69.63
vless://80902628-928b-4ade-9ed4-31f60da24888@104.17.123.242:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.17.123.242
vless://80902628-928b-4ade-9ed4-31f60da24888@104.21.68.245:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.21.68.245
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.56.140:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.56.140
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.95.250:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.95.250
vless://80902628-928b-4ade-9ed4-31f60da24888@104.19.37.244:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.19.37.244
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.124.106:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.124.106
vless://80902628-928b-4ade-9ed4-31f60da24888@104.27.91.142:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.27.91.142
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.187.5:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.187.5
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.27.179:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.27.179
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.249.135:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.249.135
vless://80902628-928b-4ade-9ed4-31f60da24888@104.17.150.13:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.17.150.13
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.55.69:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.55.69
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.154.43:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.154.43
vless://80902628-928b-4ade-9ed4-31f60da24888@104.17.80.9:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.17.80.9
vless://80902628-928b-4ade-9ed4-31f60da24888@104.21.225.61:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.21.225.61
vless://80902628-928b-4ade-9ed4-31f60da24888@172.66.45.109:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.66.45.109
vless://80902628-928b-4ade-9ed4-31f60da24888@104.17.232.102:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.17.232.102
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.123.150:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.123.150
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.153.22:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.153.22
vless://80902628-928b-4ade-9ed4-31f60da24888@172.67.171.188:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.67.171.188
vless://80902628-928b-4ade-9ed4-31f60da24888@104.25.105.243:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.25.105.243
vless://80902628-928b-4ade-9ed4-31f60da24888@172.67.175.214:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.67.175.214
vless://80902628-928b-4ade-9ed4-31f60da24888@104.19.189.147:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.19.189.147
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.2.22:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.2.22
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.151.113:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.151.113
vless://80902628-928b-4ade-9ed4-31f60da24888@104.17.215.217:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.17.215.217
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.103.220:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.103.220
vless://80902628-928b-4ade-9ed4-31f60da24888@47.74.5.99:2087?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#JP
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.253.4:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.253.4
vless://80902628-928b-4ade-9ed4-31f60da24888@104.17.21.231:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.17.21.231
vless://80902628-928b-4ade-9ed4-31f60da24888@172.66.130.208:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.66.130.208
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.22.154:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.22.154
vless://80902628-928b-4ade-9ed4-31f60da24888@104.25.173.234:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.25.173.234
vless://80902628-928b-4ade-9ed4-31f60da24888@104.19.46.243:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.19.46.243
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.41.41:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.41.41
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.82.188:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.82.188
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.67.203:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.67.203
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.45.17:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.45.17
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.180.98:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.180.98
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.16.176:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.16.176
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.207.125:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.207.125
vless://80902628-928b-4ade-9ed4-31f60da24888@172.64.200.245:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.64.200.245
vless://80902628-928b-4ade-9ed4-31f60da24888@104.17.154.19:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.17.154.19
vless://80902628-928b-4ade-9ed4-31f60da24888@104.19.156.245:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.19.156.245
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.41.218:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.41.218
vless://80902628-928b-4ade-9ed4-31f60da24888@104.25.173.206:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.25.173.206
vless://80902628-928b-4ade-9ed4-31f60da24888@172.64.142.137:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.64.142.137
vless://80902628-928b-4ade-9ed4-31f60da24888@162.159.138.152:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#162.159.138.152
vless://80902628-928b-4ade-9ed4-31f60da24888@104.19.254.78:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.19.254.78
vless://80902628-928b-4ade-9ed4-31f60da24888@104.20.92.200:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.20.92.200
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.28.89:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.28.89
vless://80902628-928b-4ade-9ed4-31f60da24888@156.229.48.115:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#156.229.48.115
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.110.37:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.110.37
vless://80902628-928b-4ade-9ed4-31f60da24888@172.67.211.65:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.67.211.65
vless://80902628-928b-4ade-9ed4-31f60da24888@172.64.169.136:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#172.64.169.136
vless://80902628-928b-4ade-9ed4-31f60da24888@104.21.215.134:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.21.215.134
vless://80902628-928b-4ade-9ed4-31f60da24888@156.238.19.91:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#156.238.19.91
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.197.135:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.197.135
vless://80902628-928b-4ade-9ed4-31f60da24888@104.17.26.223:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.17.26.223
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.77.150:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.77.150
vless://80902628-928b-4ade-9ed4-31f60da24888@104.21.239.127:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.21.239.127
vless://80902628-928b-4ade-9ed4-31f60da24888@104.23.120.47:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.23.120.47
vless://80902628-928b-4ade-9ed4-31f60da24888@194.152.44.212:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#194.152.44.212
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.218.56:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.218.56
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.26.23:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.26.23
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.10.242:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.10.242
vless://80902628-928b-4ade-9ed4-31f60da24888@104.27.1.213:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.27.1.213
vless://80902628-928b-4ade-9ed4-31f60da24888@104.20.250.210:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.20.250.210
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.34.84:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.34.84
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.148.175:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.148.175
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.17.237:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.17.237
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.214.54:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.214.54
vless://80902628-928b-4ade-9ed4-31f60da24888@104.27.201.236:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.27.201.236
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.132.111:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.132.111
vless://80902628-928b-4ade-9ed4-31f60da24888@104.17.118.63:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.17.118.63
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.60.246:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.60.246
vless://80902628-928b-4ade-9ed4-31f60da24888@104.18.11.225:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.18.11.225
vless://80902628-928b-4ade-9ed4-31f60da24888@104.20.151.209:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.20.151.209
vless://80902628-928b-4ade-9ed4-31f60da24888@104.16.73.81:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#104.16.73.81
vless://80902628-928b-4ade-9ed4-31f60da24888@198.41.216.31:443?encryption=none&security=tls&sni=mp.710703.xyz&fp=random&type=ws&host=mp.710703.xyz&path=%2F%3Fed%3D2560#198.41.216.31
https://chromego-sub.netlify.app/sub/base64.txt
https://hy2sub.pages.dev
`

//请将机场订阅链接填入上方
let urls = [];// https://subs.zeabur.app/clash , https://neko-warp.nloli.xyz/neko_warp.yaml

let subconverter = "apiurl.v1.mk"; //在线订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		let links = await ADD(MainData + '\n' + urls.join('\n'));
		let link = "";
		let linksub = "";
		
		for (let x of links) {
			if (x.toLowerCase().startsWith('http')) {
				linksub += x + '\n';
			} else {
				link += x + '\n';
			}
		}
		MainData = link;
		urls = await ADD(linksub);
		let sublinks = request.url ;
		//console.log(MainData,urls,sublinks);
		
		let warp = env.WARP ;
		if(warp && warp != "") sublinks += '|' + (await ADD(warp)).join('|');

		if ( !(token == mytoken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage("#异常访问", request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			//首页改成一个nginx伪装页
			return new Response(`
			<!DOCTYPE html>
			<html>
			<head>
			<title>Welcome to nginx!</title>
			<style>
				body {
					width: 35em;
					margin: 0 auto;
					font-family: Tahoma, Verdana, Arial, sans-serif;
				}
			</style>
			</head>
			<body>
			<h1>Welcome to nginx!</h1>
			<p>If you see this page, the nginx web server is successfully installed and
			working. Further configuration is required.</p>
			
			<p>For online documentation and support please refer to
			<a href="http://nginx.org/">nginx.org</a>.<br/>
			Commercial support is available at
			<a href="http://nginx.com/">nginx.com</a>.</p>
			
			<p><em>Thank you for using nginx.</em></p>
			</body>
			</html>
			`, {
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else if ( TG == 1 || !userAgent.includes('subconverter') || !userAgent.includes('null')){
			await sendMessage("#获取订阅", request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
		}

		let req_data = MainData;
		// 创建一个AbortController对象，用于控制fetch请求的取消
		const controller = new AbortController();

		const timeout = setTimeout(() => {
			controller.abort(); // 取消所有请求
		}, 1618); // 1.618秒后触发

		try {
			const responses = await Promise.allSettled(urls.map(url =>
				fetch(url, {
					method: 'get',
					headers: {
						'Accept': 'text/html,application/xhtml+xml,application/xml;',
						'User-Agent': `v2rayn/6.42 cmliu/CF-Workers-SUB ${userAgentHeader}`
					},
					signal: controller.signal // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
				}).then(response => {
					if (response.ok) {
						return response.text().then(content => {
							// 这里可以顺便做内容检查
							if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups') && content.includes('rules')) {
								//console.log("clashsub: " + url);
								sublinks += "|" + url;
							} else if  (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
								//console.log("singboxsub: " + url);
								sublinks += "|" + url;
							} else {
								return content; // 保证链式调用中的下一个then可以接收到文本内容
							}
						});
					} else {
						return ""; // 如果response.ok为false，返回空字符串
					}
				})
			));	
			//console.log(responses);
			for (const response of responses) {
				if (response.status === 'fulfilled') {
					const content = await response.value;
					req_data += base64Decode(content) + '\n';
				}
			}
		} catch (error) {
			//console.error(error);
		} finally {
			// 无论成功或失败，最后都清除设置的超时定时器
			clearTimeout(timeout);
		}
		//修复中文错误
		const utf8Encoder = new TextEncoder();
		const encodedData = utf8Encoder.encode(req_data);
		const text = String.fromCharCode.apply(null, encodedData);

		//去重
		const uniqueLines = new Set(text.split('\n'));
		const result = [...uniqueLines].join('\n');
		//console.log(result);

		const base64Data = btoa(result);
		//console.log(base64Data);

		//console.log("自建节点: " + MainData,"订阅链接: " + urls,"转换链接: " + sublinks);

		let target = "v2ray";
		if (userAgent.includes('clash') && !userAgent.includes('nekobox')) {
			target = "clash";
		} else if (userAgent.includes('sing-box') || userAgent.includes('singbox')) {
			target = "singbox";
		} else {
			return new Response(base64Data ,{
				headers: { 
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
				}
			});
		}

		const subconverterUrl = `https://${subconverter}/sub?target=${target}&url=${encodeURIComponent(sublinks)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;

		try {
			const subconverterResponse = await fetch(subconverterUrl);
			
			if (!subconverterResponse.ok) {
				throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
			}
			
			const subconverterContent = await subconverterResponse.text();
			
			return new Response(subconverterContent ,{
				headers: { 
					"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
				}
			});
		} catch (error) {
			return new Response(`Error: ${error.message}`, {
				status: 500,
				headers: { 'content-type': 'text/plain; charset=utf-8' },
			});
		}

	}
};

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

// 将 base64 编码的字符串转换为 utf-8 编码的字符
function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function ADD(envadd) {
	var addtext = envadd.replace(/[	 "'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}
