.PHONY: install dev build preview clean start serve

install:
	npm install

dev:
	npm run dev

start:
	npm run dev

serve:
	npm run dev

build:
	npm run build

preview:
	npm run preview

clean:
	rm -rf node_modules dist
