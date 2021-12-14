#!/bin/sh
npm start < /dev/null &> /dev/null & 
cd client && serve -s build

