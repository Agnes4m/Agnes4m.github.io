---
icon: pen-to-square
date: 2022-01-02
category:
  - 安装python
tag:
  - python
star: true
---

# 安装python

本章节主要介绍如何安装python。

<!-- more -->

## windows安装python

1. 下载python安装包，[python3.10.11](https://www.python.org/downloads/release/python-31011/)
2. 安装包下载完成后，双击运行安装包，选择默认安装目录，点击下一步。
3. 安装完成后，在命令行中输入python --version，查看安装是否成功。
4. 如果成功，则会显示当前python版本号。
5. 检查pip版本，输入pip --version，查看安装是否成功。
6. pip更换国内源`pip config set global.index-url https://mirrors.cloud.tencent.com/pypi/simple`

## ubuntu安装python

1.直接安装ubuntu22.04,默认就是python3.10,可以通过apt安装python3.10的最新版本