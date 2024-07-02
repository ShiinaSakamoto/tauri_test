import sys
import json
import datetime
import time

def dummyStartPythonMessage():
    print(json.dumps({"init_key_from_py": "Initialization from Python."}), flush=True)

def dummyLoadingCount():
    for i in range(4):
        response = json.dumps({"count_key_from_py": str(i)})
        print(response, flush=True)
        time.sleep(1)

def main():
    received_data = sys.stdin.readline().strip()
    received_data = json.loads(received_data)

    with open('process.log', 'a') as f:
        f.write(f"received_data: {received_data}\n")

    if received_data:
        response = json.dumps({"test_key_from_py": received_data["test_key_from_js"]})
        print(response, flush=True)


if __name__ == "__main__":
    try:
        dummyStartPythonMessage()
        dummyLoadingCount()
        while True:
            main()
    except Exception:
        import traceback
        with open('error.log', 'a') as f:
            traceback.print_exc(file=f)