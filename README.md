# Cordova iOS Idle Timer Plugin #


## Install
    $ cordova plugin add https://github.com/mindstorm/CDVIdleTimer

## Usage
In your JavaScript:

    $(document).on('deviceready', function() {
	  // Disable the timer
      // CDVIdleTimer.disable();

      // Enable the timer
      // CDVIdleTimer.enable();
    });



## 1. Function ##
Enable / Disable the device sleep mode.


## 2. Methods


### 2.1. enable


#### 2.1.1 Description
Enables the sleep mode functionality.


#### 2.1.2 Options
no options.


#### 2.1.3 Return Values


##### 2.1.3.1 Success
no return value.


##### 2.1.3.2 Error
<table>
	<tr>
		<th>Error Code</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>1</td>
		<td>IdleTimer is already enabled</td>
	</tr>
</table>


### 2.2. disable


#### 2.2.1 Description
Disables the sleep mode functionality.


#### 2.1.2 Options
no options.


#### 2.1.3 Return Values


##### 2.1.3.1 Success
no return value.


##### 2.1.3.2 Error
<table>
	<tr>
		<th>Error Code</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>1</td>
		<td>IdleTimer is already disabled</td>
	</tr>
</table>


## 3. Requirements
no requirements.


## 4. Version History
<table>
	<tr>
		<th>Version</th>
		<th>Date</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>1.0.0</td>
		<td>2013-03-25</td>
		<td>initial version</td>
	</tr>
</table>
