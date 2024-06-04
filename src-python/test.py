import sys
import json
import datetime
import time


def main():
    received_data = "Init"
    response = "Hello, Initialization from Python!"
    print(response, flush=True)

    received_data = sys.stdin.readline().strip()

    with open('process.log', 'a') as f:
        f.write(f"received_data: {received_data}\n")

    if received_data:
        response = f"{received_data} from Python!"
        print(response, flush=True)


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