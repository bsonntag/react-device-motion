# react-device-motion

> A react wrapper for device motion events.

## Installation

Using npm:

```sh
$ npm install --save react-device-motion
```

Using yarn:

```sh
$ yarn add react-device-motion
```

## Example

```js
import DeviceMotion from 'react-device-motion';
import React from 'react';

const App = () => (
  <DeviceMotion>
    {({
      acceleration,
      accelerationIncludingGravity,
      interval,
      rotationRate
    }) => (
      <div>
        {`Acceleration: ${JSON.stringify(acceleration)}`}
        {`Acceleration including gravity: ${JSON.stringify(accelerationIncludingGravity)
        {`Interval: ${interval}`}
        {`Rotation rate: ${JSON:stringify(rotationRate)}`}
      </div>
    )}
  </DeviceMotion>
);
```

## Contributing

Please feel free to submit any issues or pull requests.

## License

MIT
