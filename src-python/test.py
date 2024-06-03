import sys
import json
import datetime
import time


def main():
    # 標準入力からデータを受け取る
    print("Init", flush=True)

    input_data = sys.stdin.readline().strip()

    with open('process.log', 'a') as f:
        f.write(f"input_data: {input_data}\n")

    if input_data:
        response = f"Hello, {input_data} from Python!"
        print(response, flush=True)


    # input_data = sys.stdin.readline().strip()
    # with open('process.log', 'a') as f:
    #     f.write(f"input_data: {input_data}\n")

    # if input_data:
    #     response = f"Hello, {input_data} from Python!"
    #     print(response, flush=True)

    # received_data = "test"
    # response = "Hello, test from Python!"

    # with open('process.log', 'a') as f:
    #     f.write(f"Received data: {received_data}\n")
    #     f.write(f"Response: {response}\n")

    # # 標準出力に結果を出力
    # for i in range(10):
    #     print(str(i), flush=True)
    #     time.sleep(1)

if __name__ == "__main__":
    try:
        main()
    except Exception:
        import traceback
        with open('error.log', 'a') as f:
            traceback.print_exc(file=f)