# script.py
import sys
import json

def main():
    # 標準入力からデータを受け取る
    input_data = sys.stdin.read()

    # ここで任意の処理を行う（例：JSONデータを受け取って処理）
    # received_data = json.loads(input_data)
    received_data = input_data
    response = {
        "message": f"Hello, {received_data} from Python!"
        # "message": f"Hello, {received_data.get('name', 'world')}!"
    }

    # 標準出力に結果を出力
    print(json.dumps(response))

if __name__ == "__main__":
    try:
        main()
    except Exception:
        import traceback
        with open('error.log', 'a') as f:
            traceback.print_exc(file=f)