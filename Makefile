.PHONY: dist test
default: help
dev:
	npm run dev

dist:
	npm run build

view:
	npm run preview

lint:
	npm run lint

help:
	@echo "    make dev [npm run dev] 开发模式"
	@echo "    make dist [npm run build] 编译模式"
	@echo "    make view [npm run preview] 预览打包文件"
	@echo "    make new [npm run lint] 通过自动化流程创建代码"
