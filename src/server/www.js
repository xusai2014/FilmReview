import express from 'express';
import {join,resolve} from "path";
import {realpathSync} from "fs";
import {handleRender} from './serverRender';
import Api from './api'

const app = express();
const ROOT_PATH = realpathSync(resolve(__dirname, '../../'));

app.use('/node_modules',express.static(join(ROOT_PATH, 'node_modules')));
app.use('/dist',express.static(join(ROOT_PATH, 'dist')));
app.use('/bin',express.static(join(ROOT_PATH, 'bin')));
//app.use('/api',Api);
app.use(handleRender)

app.listen(4000);