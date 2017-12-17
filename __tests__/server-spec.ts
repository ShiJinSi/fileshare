import { Server } from '../src/server';
import * as Express from "express";
import * as request from 'supertest';
import * as assert from 'assert';

const app = Express();
const server = new Server(app,3000);

test('Should greet with message', () => {
  const express1 = Express();
  const express2 = Express();
  expect(express1 !== express2).toBe(true);
  const server = new Server(express1);
  expect(server.server).toBe(express1);
  server.server = express2;
  expect(server.server).toBe(express2);
});



test('测试访问用户页面success', (done) => {
  request(app)
  .get('/user/5555')
  .expect(200, function (err, res) {
    expect(err).toBeFalsy();
    expect((res.text).includes('-用户文件管理')).toBeTruthy();
    done();
  });
});
test('测试访问用户页面fail', (done) => {
  request(app)
  .get('/user/qqq')
  .expect(200, function (err, res) {
    expect(err).toBeFalsy();
    expect((res.text).includes('404')).toBeTruthy();
    done();
  });
});
test('url-register', (done) => {
  request(app)
  .get('/user/register')
  .expect(200, function (err, res) {
    expect(err).toBeFalsy();
    expect((res.text).includes('注册')).toBeTruthy();
    done();
  });
});

test('测试访问用户管理页面', (done) => {
  request(app)
  .get('/admin/users')
  .expect(200, function (err, res) {
    expect(err).toBeFalsy();
    expect((res.text).includes('支持模糊搜索')).toBeTruthy();
    done();
  })
});