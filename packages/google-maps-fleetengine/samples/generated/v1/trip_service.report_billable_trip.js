// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(name, countryCode) {
  // [START fleetengine_v1_generated_TripService_ReportBillableTrip_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Must be in the format
   *  `providers/{provider}/billableTrips/{billable_trip}`. The
   *  provider must be the Project ID (for example, `sample-cloud-project`) of
   *  the Google Cloud Project of which the service account making this call is a
   *  member.
   */
  // const name = 'abc123'
  /**
   *  Required. Two letter country code of the country where the trip takes
   *  place. Price is defined according to country code.
   */
  // const countryCode = 'abc123'
  /**
   *  The platform upon which the request was issued.
   */
  // const platform = {}
  /**
   *  The identifiers that are directly related to the trip being reported. These
   *  are usually IDs (for example, session IDs) of pre-booking operations done
   *  before the trip ID is available. The number of `related_ids` is
   *  limited to 50.
   */
  // const relatedIds = ['abc','def']
  /**
   *  The type of GMP product solution (for example,
   *  `ON_DEMAND_RIDESHARING_AND_DELIVERIES`) used for the reported trip.
   */
  // const solutionType = {}

  // Imports the Fleetengine library
  const {TripServiceClient} = require('@googlemaps/fleetengine').v1;

  // Instantiates a client
  const fleetengineClient = new TripServiceClient();

  async function callReportBillableTrip() {
    // Construct request
    const request = {
      name,
      countryCode,
    };

    // Run request
    const response = await fleetengineClient.reportBillableTrip(request);
    console.log(response);
  }

  callReportBillableTrip();
  // [END fleetengine_v1_generated_TripService_ReportBillableTrip_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
