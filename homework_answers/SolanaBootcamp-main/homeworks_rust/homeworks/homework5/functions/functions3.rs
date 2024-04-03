// functions3.rs

fn main() {
    call_this(4);
}

fn call_this(num: u32) {
    for i in 0..num {
        println!("Loop now {}", i + 1);
    }
}
