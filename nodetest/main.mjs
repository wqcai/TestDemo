import { createServer } from 'http';
import { readFile } from 'fs';
import { parse } from 'url';
import { join } from 'path';

const server = createServer((request, response) => {
  // 客户端输入的url, 例如如果输入localhost:8888/index.html,那么这里的url == /index.html
  // url.parse() 方法将一个url字符串转换成对象并返回，通过pathname来访问此url的地址
  const pathName = parse(request.url).pathname;
  // 读取同目录的文件来解析
  const readPath = join('./css3InIE.zip');
  // 完整的url路径
  console.log(readPath);

  readFile(readPath, (err, data) => {
    console.log(data);
    if (err) {
      // 未找到文件
      response.writeHead(404, {
        'content-type': 'text/plain'
      });
      response.write('404, noData');
      response.end();
    } else {
      response.writeHead(200, {
        'content-type': 'application/octet-stream'
      });
      response.write(data);
      response.end();
    }
  });
}).listen(8087);

console.log('服务成功启动！');

