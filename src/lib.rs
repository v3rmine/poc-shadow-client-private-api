//! Library to used to access the Shadow private API with Rust
#![allow(dead_code)]

#[macro_use]
extern crate error_chain;
#[macro_use]
extern crate ureq;

#[macro_use]
mod macros;

pub mod client;
pub use client::{Response, ToResp};
pub mod errors;
pub use errors::Result;
pub mod constants;

pub mod general;
pub mod status;
//#[cfg(logging)]
pub mod auth;
pub mod computer;
pub mod customer;
pub mod dispatcher;
pub mod log;
