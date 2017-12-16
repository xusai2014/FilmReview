import express from 'express';
import {join,resolve} from "path";
import {realpathSync} from "fs";
import {handleRender} from './serverRender'

const app = express();
const ROOT_PATH = realpathSync(resolve(__dirname, '../../'));

app.use('/node_modules',express.static(join(ROOT_PATH, 'node_modules')));
app.use('/dist',express.static(join(ROOT_PATH, 'dist')));
app.use('/bin',express.static(join(ROOT_PATH, 'bin')));
app.use(handleRender)

app.get('/', function(req, res) {
    res.send(`
        <html>
        <head>
            <script src="/node_modules/jquery/dist/jquery.js"></script>
            <script src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        </head>
        <body>
        <div id="root"></div>

        <script src="/bin/client.bundle.js"></script>
        <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
        
        <script src="https://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.js"></script>
        </body>
        </html>
    `);
});

app.listen(4000);