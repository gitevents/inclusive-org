#!make
MAKEFLAGS += --silent
include .env
export $(shell sed 's/=.*//' .env)

dev:
		act -s GITHUB_TOKEN -a cyprus-developer-community/events workflow_dispatch

.PHONY: dev
