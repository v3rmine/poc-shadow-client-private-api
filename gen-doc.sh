#!/bin/bash
cargo doc --no-deps
rm -rf ./docs
cp -r ./target/doc/shadowtech_api ./docs
