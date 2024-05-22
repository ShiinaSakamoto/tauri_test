// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// use tauri::command;
use std::process::{Command, Stdio};
use std::io::Write;

#[tauri::command(rename_all = "snake_case")]
fn run_python_script(input: String) -> String {
    let mut cmd = Command::new("python")
        .arg("../src-python/test.py")
        .stdin(Stdio::piped())
        .stdout(Stdio::piped())
        .spawn()
        .expect("failed to execute process");

    {
        let stdin = cmd.stdin.as_mut().expect("failed to open stdin");
        stdin.write_all(input.as_bytes()).expect("failed to write to stdin");
    }

    let output = cmd.wait_with_output().expect("failed to read stdout");
    let response = String::from_utf8(output.stdout).expect("failed to convert output to string");

    response
}


// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command(rename_all = "snake_case")]
fn greet(invoke_message: String) -> String {
    format!("{} World!", invoke_message)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, run_python_script])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");

}
