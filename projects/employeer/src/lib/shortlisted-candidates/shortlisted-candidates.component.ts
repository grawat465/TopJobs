import { Component, OnInit } from '@angular/core';
import { ShortlistApplicants } from '../models/ShortlistApplicants';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'emp-shortlisted-candidates',
  templateUrl: './shortlisted-candidates.component.html',
  styleUrls: ['./shortlisted-candidates.compon