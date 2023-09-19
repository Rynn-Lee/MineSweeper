// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use serde_json::Number;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet, recursion])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn greet(msg: String) -> String {
  let str = format!("Hewwo wowld! {}", msg);
  str.into()
  // let strvar = format!("Hewwo wowld!, {}", msg).into();
}

// #[tauri::command]
// fn recursion(x: Number, y: Number, new_arr: &dyn Any){
//   println!("Hewo")
// }


#[tauri::command]
fn recursion(x: Number, y: Number, new_arr: String) -> String {
  let str = format!("Hewwo wowld! {}", new_arr);
  println!("{},{},{}", x, y, new_arr);
  str.into()
  // let strvar = format!("Hewwo wowld!, {}", msg).into();
}