import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-e-submission',
  templateUrl: './e-submission.component.html',
  styleUrls: ['./e-submission.component.scss']
})
export class ESubmissionComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".custom-file-input").on("change", function () {
      var fileName = $(this).val().split("\\").pop();
      $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });

    //preview image upload
    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $('#profile-img-tag').attr('src', reader.result);
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
    $("#customFile").change(function () {
      readURL(this);
    });
  }

}
