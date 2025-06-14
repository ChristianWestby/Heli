from flask import Flask, request, jsonify
import datetime
# import RPi.GPIO as GPIO  # Brukes senere på Pi

app = Flask(__name__)

# Logg-funksjon

def log_command(command, value):
    timestamp = datetime.datetime.now().isoformat()
    print(f"[{timestamp}] Kommando mottatt: {command} = {value}")
    # Kan også skrives til fil:
    # with open("logg.txt", "a") as f:
    #     f.write(f"{timestamp} - {command}: {value}\n")

# API-endepunkt

@app.route("/api/command", methods=["POST"])
def command():
    data = request.get_json()
    command = data.get("command")
    value = data.get("value")

    if not command:
        return jsonify({"error": "Mangler 'command'"}), 400

    log_command(command, value)

    # Her kan du legge til GPIO-handling senere:
    # if command == "light":
    #     GPIO.output(LED_PIN, GPIO.HIGH if value else GPIO.LOW)

    return jsonify({"status": "OK", "command": command, "value": value}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)